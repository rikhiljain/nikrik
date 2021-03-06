class PolicyAttributesController < ApplicationController
  # GET /policy_attributes
  # GET /policy_attributes.json
  def index
     policy_type = params[:type]
     if ( policy_type.blank?)
       @policy_attributes = PolicyAttribute.order("policy_type, order_num asc, company_id asc").all
     else
        @policy_attributes = PolicyAttribute.find_By_policy_type(policy_type)
     end
    child_hash = Hash.new
    parent_hash = Hash.new
    prev_attribute_name = ""
    @policy_attributes.each do |attribute|

      if (prev_attribute_name != attribute.attrib_name)
        parent_hash[prev_attribute_name] = child_hash unless prev_attribute_name == ""
        child_hash = Hash.new
        prev_attribute_name = attribute.attrib_name
      end
      if attribute.plan.blank?
        child_hash[attribute.company_id] = attribute.attrib_value
      else
        child_hash["#{attribute.company_id}:#{attribute.plan}"] = attribute.attrib_value
      end
    
    end

    #for last attribute
    parent_hash[prev_attribute_name] = child_hash unless prev_attribute_name == ""

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: parent_hash }
    end
  end

  # GET /policy_attributes/1
  # GET /policy_attributes/1.json
  def show
    @policy_attribute = PolicyAttribute.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @policy_attribute }
    end
  end

  # GET /policy_attributes/new
  # GET /policy_attributes/new.json
  def new
    @policy_attribute = PolicyAttribute.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @policy_attribute }
    end
  end

  # GET /policy_attributes/1/edit
  def edit
    @policy_attribute = PolicyAttribute.find(params[:id])
  end

  # POST /policy_attributes
  # POST /policy_attributes.json
  def create
    @policy_attribute = PolicyAttribute.new(params[:policy_attribute])

    respond_to do |format|
      if @policy_attribute.save
        format.html { redirect_to @policy_attribute, notice: 'Policy attribute was successfully created.' }
        format.json { render json: @policy_attribute, status: :created, location: @policy_attribute }
      else
        format.html { render action: "new" }
        format.json { render json: @policy_attribute.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /policy_attributes/1
  # PUT /policy_attributes/1.json
  def update
    @policy_attribute = PolicyAttribute.find(params[:id])

    respond_to do |format|
      if @policy_attribute.update_attributes(params[:policy_attribute])
        format.html { redirect_to @policy_attribute, notice: 'Policy attribute was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @policy_attribute.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /policy_attributes/1
  # DELETE /policy_attributes/1.json
  def destroy
    @policy_attribute = PolicyAttribute.find(params[:id])
    @policy_attribute.destroy

    respond_to do |format|
      format.html { redirect_to policy_attributes_url }
      format.json { head :no_content }
    end
  end
end
